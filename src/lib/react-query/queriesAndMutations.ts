import {
  useQuery,
  useQueryClient,
  useMutation,
  useInfiniteQuery,
} from '@tanstack/react-query';

// API
import { 
  postCreateAccount, 
  postLoginAccount, 
  postLogoutAccount,
  postCreateDocument,
  postUploadFile,
} from '../colony-office/api';

// Types
import { INewAccount, INewDocument } from '@/types';

/*
Mutations are used as a middleware between the Client functions and the Server-side functions
They can, or are, defined as having two parts: Query and Mutation
-Query: is the Read in CRUD. Use for functions like Get calls, and an SQL Select statement
-Mutation: is the Create, Update, and Delete in CRUD. Use for functions like POST, PATCH, PUT, DELETE
*/

/********** Account Mutations **********/
export const useCreateAccountMutation = () => {
  return useMutation({
    mutationFn: (account: INewAccount) => postCreateAccount(account)
  })
}

export const useLoginAccountMutation = () => {
  return useMutation({
    mutationFn: (account: {
      email: string, 
      password: string
    }) => postLoginAccount(account)
  })
}
 
export const useLogoutAccountMutation = () => {
  return useMutation({
    mutationFn: () => postLogoutAccount()
  })
}

/********** Document Mutations **********/
export const useCreateDocumentMutation = () => {
  return useMutation({
    mutationFn: (document: INewDocument) => postCreateDocument(document)
  })
}

/********** Files Mutations **********/
export const useUploadFileMutation = () => {
  return useMutation({
    mutationFn: (file: FormData) => postUploadFile(file)
  })
}