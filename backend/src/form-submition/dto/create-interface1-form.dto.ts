import { Type } from 'class-transformer';
import { IsObject, IsString, ValidateNested } from 'class-validator';

class siteSection {
    @IsString()
    siteCode: string;

    @IsString()
    siteName: string;

    @IsString()
    siteAddress: string;

    @IsString()
    sitePatente: string;

    @IsString()
    siteRcNumber: string;

    @IsString()
    siteIceNumber: string;

    @IsString()
    siteAtel: string;
}

class managerSection {
    @IsString()
    maFullName: string;

    @IsString()
    maCineNumber: string;

    @IsString()
    maAddress: string;

    @IsString()
    maMobileNumber: string;

    @IsString()
    maEmail: string;
}

class operatorSection {
    @IsString()
    opCode: string;

    @IsString()
    opFullName: string;

    @IsString()
    opCineNumber: string;

    @IsString()
    opAddress: string;

    @IsString()
    opMobileNumber: string;

    @IsString()
    opMachineSerialNumber: string;
}


export class createInter1Dto {
    @IsObject()
    @ValidateNested()
    @Type(() => siteSection)
    siteSection: siteSection;

    @IsObject()
    @ValidateNested()
    @Type(() => managerSection)
    managerSection: managerSection;

    @IsObject()
    @ValidateNested()
    @Type(() => operatorSection)
    operatorSection: operatorSection;
}