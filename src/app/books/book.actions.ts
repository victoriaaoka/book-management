import {createAction, props} from '@ngrx/store';
import { Book } from '../models/book';

export const AddBook = createAction('[book] Add Book', props<Book>());
export const AddBookSuccess = createAction('[book] Added book successfully', props<Book>());
export const AddBookFailure = createAction('[book] Added book failure', props<{error: any}>());

export const RemoveBook = createAction('[book] Remove Book', props<{bookId: string}>());