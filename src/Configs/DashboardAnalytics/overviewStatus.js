export const overviewStatus = {
  unsolved: {
    label: "Unsolved",
    counting: Math.round(Math.random() * 100),
  },
  overdue: {
    label: "Overdue",
    counting: Math.round(Math.random() * 100),
  },
  open: {
    label: "Open",
    counting: Math.round(Math.random() * 100),
  },
  on_hold: {
    label: "On hold",
    counting: Math.round(Math.random() * 100),
  },
};

export const analytics_status = {
  resolved: {
    label: "Resolved",
    counting: Math.round(Math.random() * 1000),
  },
  received: {
    label: "Received",
    counting: Math.round(Math.random() * 1000),
  },
  first_response: {
    label: "Average first response time",
    counting: `${Math.round(Math.random() * 1000)}m`,
  },
  response_time: {
    label: "Average response time",
    counting: `${Math.round(Math.random() * 10)}h 8m`,
  },
  resolution: {
    label: "Resolution within SLA",
    counting: `${Math.round(Math.random() * 100)}%`,
  },
};

export const unsolved_ticket_status = {
  waiting_feature: {
    label: "Waiting on Feature Request",
    status: Math.round(Math.random() * 1000),
  },
  customer_response: {
    label: "Awaiting Customer Response",
    status: Math.round(Math.random() * 1000),
  },
  developer_fix: {
    label: "Awaiting Developer Fix",
    status: `${Math.round(Math.random() * 1000)}`,
  },
  pending: {
    label: "Pending",
    status: `${Math.round(Math.random() * 100)}`,
  },
};
