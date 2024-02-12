const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, 'Required field'],
    },
    createdAt: {
      type: Date,
      required: [true, 'Required field'],
    },
    status: {
      type: String,
      enum: ['not done', 'in progress', 'blocked', 'done'],
      default: 'not done'
    }
  },
  {
    timestamps: true,
    virtuals: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
      }
    }
  }
)

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;