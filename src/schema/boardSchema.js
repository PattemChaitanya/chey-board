const boardSchemaObject = {
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  owner: {
    type: "Schema.Types.ObjectId",
    ref: "User",
    required: true,
  },
  members: [
    {
      userId: {
        type: "Schema.Types.ObjectId",
        ref: "User",
      },
      permissionLevel: {
        type: String,
        enum: ["read", "write", "admin"],
        default: "read",
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
};

const userSchemaObject = {
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    enum: ["admin", "manager", "user"],
    default: "user",
  },
  permissions: {
    canCreate: {
      type: Boolean,
      default: false,
    },
    canRead: {
      type: Boolean,
      default: true,
    },
    canUpdate: {
      type: Boolean,
      default: false,
    },
    canDelete: {
      type: Boolean,
      default: false,
    },
  },
  access: {
    boards: [
      {
        boardId: {
          type: "Schema.Types.ObjectId",
          ref: "Board",
        },
        permissionLevel: {
          type: String,
          enum: ["read", "write", "admin"],
          default: "read",
        },
      },
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
};

module.exports = { boardSchemaObject, userSchemaObject };
