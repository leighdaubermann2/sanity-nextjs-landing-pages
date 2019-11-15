export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5dce8a9ef70e1828d2aaa523',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7numcchr',
                  apiId: 'af64ceb5-1dea-4817-a715-c2a46cfdbf9e'
                },
                {
                  buildHookId: '5dce8a9e3de0aceb2ff99ef3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pakz6v2q',
                  apiId: '204f5589-a887-45c9-b246-b3700f79ddc3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leighdaubermann2/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pakz6v2q.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
