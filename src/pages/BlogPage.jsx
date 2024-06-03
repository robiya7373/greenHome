import React from 'react';

// Layout
import { HeaderFooterLayout } from '../layouts/imports';

// Components
import {
  CurrentPage,
  BlogList,
} from '../components/imports';

function BlogPage() {
  return(
    <HeaderFooterLayout>
      <CurrentPage page={['blog']} />
      <BlogList />
    </HeaderFooterLayout>
  )
}

export default BlogPage;
