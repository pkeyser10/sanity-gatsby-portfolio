export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6047a6e9c6021b0df1393b00',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-3pjnif3a',
                  apiId: '554100b4-b52b-4109-a8af-40763dcc5302'
                },
                {
                  buildHookId: '6047a6e9e9e94c108c41eb7c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pa3bff63',
                  apiId: '311b1baf-82e2-445d-9d9e-4c8fa2b22080'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pkeyser10/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pa3bff63.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
