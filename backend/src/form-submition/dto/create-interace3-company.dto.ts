import { Type } from "class-transformer";
import { IsBoolean, IsObject, IsString, ValidateNested } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

class Top {
    @IsString()
    companyName: string;

    @IsString()
    rc: string;
    
    @IsString()
    address: string;
    
    @IsString()
    ownerCineNumber: string;
    
    @IsString()
    ownerFullName: string;
    
    @IsString()
    mandatoryCineNumber: string;
    
    @IsString()
    phoneNumber: string;
    
    @IsString()
    email: string;
}

class Bottom {
    @IsBoolean()
    rcAndVehiReg: boolean;
    
    @IsBoolean()
    rcScan: boolean;
    
    @IsBoolean()
    CineScan: boolean;
    
    @IsBoolean()
    vehiRegScan: boolean;
    
    @IsBoolean()
    comProcurator: boolean;
}

export class createForm3CompanyDto {
    @IsObject()
    @ValidateNested()
    @Type(() => Top)
    top: Top;


    @IsObject()
    @ValidateNested()
    @Type(() => Bottom)
    bottom: Bottom;
}
    
    