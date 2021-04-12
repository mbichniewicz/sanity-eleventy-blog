export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '6074ce0b80971a00ba7cc838',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-9ms3ywck',
                  apiId: 'ff5743da-e450-4be8-8fd1-0751457bb306'
                },
                {
                  buildHookId: '6074ce0c39520a008b268e63',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-7rbf96je',
                  apiId: '23869c2c-cd47-44ba-8de4-1eb08a82b916'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mbichniewicz/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-7rbf96je.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
