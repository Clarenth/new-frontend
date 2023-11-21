import {
  useQuery,
  useQueryClient,
  useMutation,
  useInfiniteQuery,
} from '@tanstack/react-query';

// API
import { createAccount, loginAccount } from '../colony-office/api';

// Types
import { INewAccount } from '@/types';

export const useCreateAccountMutation = () => {
  return useMutation({
    mutationFn: (account: INewAccount) => createAccount(account)
  })
}

export const useLoginAccountMutation = () => {
  return useMutation({
    mutationFn: (account: {
      email: string, 
      password: string
    }) => loginAccount(account)
  })
}