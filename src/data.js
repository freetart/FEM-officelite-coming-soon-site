const planData = [
  {
    id: 1,
    isPrimary: false,
    type: "Basic",
    cost: "Free",
    description: "Up to 5 users for free",
    features: [
      "Basic document collaboration",
      "2 GB storage",
      "Great security and support",
    ],
    buttonType: "secondary",
  },
  {
    id: 2,
    isPrimary: true,
    type: "Pro",
    cost: "$9.99",
    description: "Per user, billed monthly",
    features: [
      "All essential integrations",
      "50 GB storage",
      "More controls and insights",
    ],
    buttonType: "tertiary",
  },
  {
    id: 3,
    isPrimary: false,
    type: "Ultimate",
    cost: "$19.99",
    description: "Per user, billed monthly",
    features: ["Robust work management", "100 GB storage", "VIP support"],
    buttonType: "secondary",
  },
];

export default planData;
