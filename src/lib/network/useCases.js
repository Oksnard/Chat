export default (client) => ({
  loadProfileInfo: () => client.get(`/api/moderator/`),
  changePassword: ({ password_old, password_new }) =>
    client.put(`/api/moderator/password/`, { password_old, password_new }),
  saveProfileInfo: (data) => client.put(`/api/moderator/`, data),
  chaneProfileImage: (data) => client.post(`/api/moderator/image/`, data),

  login: ({ phone, password }) =>
    client.post(`/api/auth/moderator/`, { phone, password }),

  getChatInfo: (pk) => client.get(`/chat/api/moderator/chats/${pk}`),
  uploadPhotos: (data) => client.post(`/chat/api/media/`, data),

  getChatMessages: (chatId) =>
    client.get(`/chat/api/moderator/chats/${chatId}/messages`),
  getModeratorChats: () => client.get(`/chat/api/moderator/chats/`),
  restore: (email) => client.put(`/api/moderator/restore/`, email)
})
