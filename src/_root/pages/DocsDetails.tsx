// Libraries
import React from 'react'
import { useParams } from 'react-router-dom'

// Mutations
import { useGetDocumentByIDMutation } from '@/lib/react-query/queriesAndMutations'

// Components
import Loader from '@/components/shared/Loader'

const DocsDetails = () => {
  const { document_id } = useParams()
  const { data: document, isPending } = useGetDocumentByIDMutation(document_id || '')

  return (
    <div>
      { isPending ? <Loader /> : (
        <div className='document_details-card'>
          <div className='flex items-center gap-3'>
            <div className='flex flex-col gap-1'>
              <p className='base-medium lg:body-bold'>
                {document.document.document_title}
              </p>
              <p className='subtle-semibold lg:small-regular'>
                Author: {document.document.author_name}
              </p>
              <p className='subtle-semibold lg:small-regular'>
                Date: {document.document.created_at}
              </p>
              <p className='subtle-semibold lg:small-regular'>
                Language: {document.document.language}
              </p>
              
            </div>
          </div>
        </div>
      ) }
    </div>
  )
}

export default DocsDetails