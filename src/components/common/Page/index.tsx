import React from 'react'
import classes from "./page.module.css"
const Page = ({children, pageTitle}:{children:React.ReactNode, pageTitle:string}) => {
  return (
    <div>
        <h3 className={classes['page-title']}>{pageTitle}</h3>
        <br/>
        {children}
    </div>
  )
}

export default Page