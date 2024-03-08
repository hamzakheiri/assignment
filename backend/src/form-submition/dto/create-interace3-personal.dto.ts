import { Type } from "class-transformer";
import { IsBoolean, IsObject, IsString, ValidateNested } from "class-validator"

class Top { 
    @IsString()
    lastName: string;

    @IsString()
    firstName: string;

    @IsString()
    cineNumber: string;
    
    @IsString()
    ownerAddress: string;
    
    @IsString()
    ownerCineValidationDate: string;
    
    @IsString()
    ownerPhoneNumber: string;
    
    @IsString()
    ownerEmail: string;
}


class Bottom {
    @IsBoolean()
    cinAuth: boolean;

    @IsBoolean()
    vehiReg: boolean;
    
    @IsBoolean()
    cinScan: boolean;
    
    @IsBoolean()
    vehiRegiScan: boolean;

}


export class createForm3PersonalDto{
    @IsObject()
    @ValidateNested()
    @Type(() => Top)
    top: Top;


    @IsObject()
    @ValidateNested()
    @Type(() => Bottom)
    bottom: Bottom;
}