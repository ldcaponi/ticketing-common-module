export enum OrderStatus {
  // Order created, but ticket is trying to order has not been reserved
  Created = "created",

  // The ticket has already been reserved
  // Or the order expires before payment occurrs
  Cancelled = "cancelled",

  // The order has successfully reserved ticket
  AwaitingPayment = "awaiting:payment",

  // The order has reserved the ticket, and user paid successfully
  Complete = "complete",
}
