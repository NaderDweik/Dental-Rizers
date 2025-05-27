// File: src/store/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Real API login using DummyJSON
export const loginUser = createAsyncThunk(
  'auth/loginUser', //1. Action type prefix automatically generate unique action types  users/fetchUsers/pending

// 2. Payload creator function
  async ({ username, password }, { rejectWithValue }) => {
    try {
      // API call
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, //These are HTTP headers & tells the server that the data being sent in the request body is in JSON format.
        body: JSON.stringify({
          username: username,
          password: password,
          expiresInMins: 1 //how long the returned JWT token should be valid (here, 1 minute for demo purposes).
        }),
      })

      const data = await response.json()

      if (response.ok) { // Check if response is OK  200-299 range 
        // Map API user to your app format
        const user = {
          id: data.id,
          username: data.username,
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          role: assignRole(data.username), // Assign role based on username
          permissions: getPermissions(assignRole(data.username)),
          token: data.accessToken // Store the real JWT token
        }

        // Save user to localStorage //setItem(): A method of localStorage used to save a key-value pair.

        localStorage.setItem('currentUser', JSON.stringify(user)) //localStorage can only store strings.
        return { user } ////  This line is executed if the login is successful Becomes action.payload in fulfilled


      } else {
        return rejectWithValue(data.message || 'Login faileddd') // becomes action.payload in rejected
      }
    } catch (error) { //This block handles errors that occur before a successful response is received (the internet connection is down,
      return rejectWithValue('Network error: Unable to connect to server')
    }
  }
)

// Helper function to assign roles based on username
function assignRole(username) {
  // Map specific DummyJSON users to your roles
  const roleMap = {
    'emilys': 'admin',
    'michaelw': 'doctor', 
    'sophiab': 'designer'
  }
  
  return roleMap[username] || 'designer' // Default to designer
}

// Helper function to get permissions based on role
function getPermissions(role) {
  switch (role) {
    case 'admin':
      return ['view_all', 'edit_patients', 'backup_data', 'manage_roles', 'view_patients', 'view_designs']
    case 'doctor':
      return ['view_patients', 'edit_patients']
    case 'designer':
      return ['view_designs']
    default:
      return ['view_designs']
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    isAuthenticated: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      localStorage.removeItem('currentUser')
    },
    clearError: (state) => {
      state.error = null
    },
    setUser: (state, action) => {
      state.user = action.payload.user
      state.isAuthenticated = true
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
        state.isAuthenticated = true
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        state.isAuthenticated = false
      })
  },
})

export const { logout, clearError, setUser } = authSlice.actions
export default authSlice.reducer