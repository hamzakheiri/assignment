import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";

export class SerializeDocumentInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(map((document) => {
            console.log(document instanceof Array);
            if (document instanceof Array) {
                return document.map((doc) => {
                    const { binaryData, ...rest } = doc;
                    return { ...rest };
                })
            }
            const { binaryData, ...rest } = document;
            return { ...rest };
        }))
    }
} 