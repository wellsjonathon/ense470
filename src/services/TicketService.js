import Api from '@/services/Api'

export default {
  GetAllTickets () {
    return Api().get('allTickets')
  },
  GetMyRequests (userId) {
    return Api().get('getMyRequests/' + userId)
  },
  GetMyPendingTickets (userId) {
    return Api().get('getMyPendingTickets/' + userId)
  },
  GetApprovedTickets (userId) {
    return Api().get('getApprovedTickets/' + userId)
  },
  GetTicketDetails(ticketId) {
    return Api().get('getTicketDetails/' + ticketId)
  },
  CreateNewTicket (credentials) {
    return Api().post('createNewTicket', credentials)
  },
  ApproveTicket (ticketId) {
    return Api().post('approveTicket', { TicketId: ticketId })
  },
  DenyTicket (ticketId) {
    return Api().post('denyTicket', { TicketId: ticketId })
  }
}
