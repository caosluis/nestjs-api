import { IsString, IsBoolean, IsOptional, IsNotEmpty } from "class-validator"

export class updateTaskDto {
    @IsOptional()
    @IsString()    
    title?: string

    
    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsBoolean()    
    done?: boolean
}