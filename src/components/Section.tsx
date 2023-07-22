import React from 'react';

interface SectionProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  title?: string
}

function Section({children, title, ...props}: SectionProps) {
  return (
    <section {...props}>
      <div className="section-container">
        {title && (
          <h1 className="section-title fade-in">
            {title}
            <hr/>
          </h1>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
