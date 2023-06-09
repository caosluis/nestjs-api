import { Controller, Get, Post, Patch, Delete, Put, Body, Param, ConflictException, NotFoundException, HttpStatus, HttpCode } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto } from 'src/dto/taskCreate.dto';
import { updateTaskDto } from 'src/dto/taskUpdate.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    findAll() {
        return this.tasksService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const task = await this.tasksService.findOne(id)
        if (!task) throw new NotFoundException('Task not found')
        return task
    }
    @Post()
    async create(@Body() body: createTaskDto) {
        try {
            return await this.tasksService.create(body)
        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException('Task already exists')
            }
            throw error
        }

    }
    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        const task = await this.tasksService.findOne(id)
        if (!task) throw new NotFoundException('Task not found')
        return
    }
    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: updateTaskDto) {
        const task = await this.tasksService.update(id, body)      
        if (!task) throw new NotFoundException('Task not found')
        return task
    }
    @Put(':id')
    async replace(@Param('id') id: string, @Body() body: updateTaskDto) {
        const task = await this.tasksService.update(id, body)
        if (!task) throw new NotFoundException('Task not found')
        return task
    }
}
