import Transformer from '../transformer';

class TaskTransformer extends Transformer {
  constructor(data: any) {
    const properties = [
      '_id', 'title', 'description', 'date', 'status', 'is_important', 'user', 'created_at', 'updated_at',
    ];
    super(data, properties);
  }
}

export default TaskTransformer;
