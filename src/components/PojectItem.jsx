import React from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const ProjectItem = ({ img, title, type, technologies, description, features, contribution, learning, limitation, demo, repository }) => (
  <article className="project-card h-full flex flex-col overflow-hidden rounded-xl bg-gray-50 shadow-lg">
    <div className="aspect-[4/3] w-full bg-gray-100 flex items-center justify-center">
      <img src={img} alt={`${title} application preview`} className="h-full w-full object-contain" loading="lazy" />
    </div>
    <div className="flex flex-1 flex-col p-6">
      <p className="project-type text-sm font-medium">{type}</p>
      <h3 className="mt-2 text-xl font-bold text-[#001b5e]">{title}</h3>
      <p className="project-technologies mt-3 text-sm">{technologies}</p>
      <p className="mt-4 leading-relaxed">{description}</p>
      <dl className="project-details mt-5 space-y-4 text-sm leading-relaxed">
        <div><dt>Key features</dt><dd>{features}</dd></div>
        <div><dt>My involvement</dt><dd>{contribution}</dd></div>
        <div><dt>Learning focus</dt><dd>{learning}</dd></div>
      </dl>
      <p className="project-note mt-5 text-sm leading-relaxed">{limitation}</p>
      <div className="project-links mt-auto flex flex-wrap gap-3 pt-6">
        {demo && <a className="project-demo" href={demo} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} live demo (opens in a new tab)`}><FiExternalLink aria-hidden="true" />Live Demo</a>}
        <a className="project-source" href={repository} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} on GitHub (opens in a new tab)`}><FiGithub aria-hidden="true" />GitHub</a>
      </div>
    </div>
  </article>
)

export default ProjectItem
