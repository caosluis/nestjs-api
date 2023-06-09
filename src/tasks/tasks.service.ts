import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Task } from 'src/schemas/task.schema';
import { Model } from 'mongoose';
import { createTaskDto } from 'src/dto/taskCreate.dto';
import { updateTaskDto } from 'src/dto/taskUpdate.dto';


@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) { }

    findAll() {
        return this.taskModel.find()
    }
    async create(createTask: createTaskDto) {
        const newTask = new this.taskModel(createTask)
        return await newTask.save()
    }
    findOne(id: string) {
        return this.taskModel.findById(id)
    }
    delete(id: any) {
        return this.taskModel.findByIdAndDelete(id)
    }
    update(id: string, task: updateTaskDto) {
        return this.taskModel.findByIdAndUpdate(id, task, { new: true })
    }
    replace(id: string, task: updateTaskDto) {
        return this.taskModel.findByIdAndUpdate(id, task, { new: true })
    }
}
