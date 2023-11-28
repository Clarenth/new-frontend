import React from 'react'
import { Link } from 'react-router-dom';
import { Tooltip, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { TooltipContent } from '@radix-ui/react-tooltip';
import { useAccountContext } from '@/context/AuthContext';

type documentCardProps = {
  document: {
    document_id: string;
    document_title: string;
    author_name: string;
    author_id: string;
    language: string;
    created_at: string;
  }
  // title: string;
  // author: string;
  // language: string;
  // data: string;
}



const DocsCard = ({ document }: documentCardProps) => {
  const { account } = useAccountContext();

  return (
    <div className='document-card'>
      <div className='flex-between'>
        <Link to={`/docs/${document.document_id}`}>
        <div className='flex items-center gap-3'>
          <div className='flex flex-col gap-1'>
            <p className='base-medium lg:body-bold'>
              {document.document_title}
            </p>

            <div className='flex flex-row gap-2 base-medium lg:body-bold text-light-1'>
              <p className='subtle-semibold lg:small-regular'>
                {document.author_name}
              </p>
              <p className='subtle-semibold lg:small-regular'>
                {document.language}
              </p>
              <p className='subtle-semibold lg:small-regular'>
                {document.created_at}
              </p>
            </div>
          </div>
        </div>
        </Link>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to={`/update-doc/${document.document_id}`}
                className={`${account.id_code !== document.author_id} && "hidden"`}
              >          
                <img 
                  src='/assets/edit-file-dark-svgrepo-com.svg'
                  alt='Edit Document'
                  width={25}
                  height={25}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              Edit Document
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
      </div>
    </div>
  )
}

export default DocsCard