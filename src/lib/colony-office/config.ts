export const serverConfig = {
  currentAccount: import.meta.env.VITE_SERVER_CURRENT_ACCOUNT,
  host: import.meta.env.VITE_SERVER,
  
  // Account
  login: import.meta.env.VITE_SERVER_LOGIN,
  logout: import .meta.env.VITE_SERVER_LOGOUT,
  signup: import.meta.env.VITE_SERVER_SIGNUP,
  newTokenPair: import.meta.env.VITE_SERVER_NEW_TOKEN_PAIR,

  // Documents
  getDocuments: import.meta.env.VITE_SERVER_GET_DOCUMENTS,
  createDocument: import.meta.env.VITE_SERVER_CREATE_DOCUMENTS,

  // Files
  uploadFiles: import.meta.env.VITE_SERVER_UPLOAD_FILES_UPLOAD
}