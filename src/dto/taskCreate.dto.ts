import { IsString, IsBoolean, IsOptional, IsNotEmpty } from "class-validator"

export class createTaskDto {
    @IsString()
    @IsNotEmpty()
    title?: string
    @IsString()
    @IsOptional()
    description?: string
    @IsBoolean()
    @IsOptional()
    done?: boolean
}