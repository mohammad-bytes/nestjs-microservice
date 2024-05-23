import { ApiProperty } from "@nestjs/swagger"
import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString } from "class-validator"

export class SignUpDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsAlphanumeric()
    firstName: string

    @ApiProperty()
    @IsNotEmpty()
    @IsAlphanumeric()
    lastName: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsNotEmpty()
    password: string
}