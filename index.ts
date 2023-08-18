import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
//emit error

// https://www.learnrxjs.io/learn-rxjs/operators/error_handling/catch

// catchError throw throwError VVV
const src = throwError('This is an error!'); //++
// const src = of('This is an error!'); //++

//gracefully handle error, returning observable with error message
const example = src.pipe(catchError((val) => of(`I caught: ${val}`)));
//output: 'I caught: This is an error'
const subscribe = example.subscribe((val) => console.log(val));
