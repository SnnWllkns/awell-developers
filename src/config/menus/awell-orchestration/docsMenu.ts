import { type MenuItemType } from '../../../types/menu.types'

export const docsMenu: MenuItemType[] = [
  {
    title: 'Getting started',
    submenu: [
      {
        title: 'What is Awell Orchestration?',
        path: '/awell-orchestration/docs/getting-started/what-is-awell-orchestration',
      },
      {
        title: 'Awell ecosystem',
        path: '/awell-orchestration/docs/getting-started/awell-ecosystem',
      },
      {
        title: 'Domain model',
        path: '/awell-orchestration/docs/getting-started/domain-model',
      },
      {
        title: 'Integrations overview',
        path: '/awell-orchestration/docs/getting-started/integrations-overview',
      },
      {
        title: 'Pathway versioning',
        path: '/awell-orchestration/docs/getting-started/pathway-versioning',
      },
    ],
  },
  {
    title: 'Use cases',
    submenu: [
      {
        title: 'Hosted pathway',
        path: '/awell-orchestration/docs/use-cases/hosted-pathway',
      },
      {
        title: 'Hosted activity',
        path: '/awell-orchestration/docs/use-cases/hosted-activity',
      },
      {
        title: 'Custom integration',
        path: '/awell-orchestration/docs/use-cases/custom-integration',
      },
    ],
  },
  {
    title: 'Data',
    submenu: [
      {
        title: 'Data access',
        path: '/awell-orchestration/docs/data/data-access',
      },
      {
        title: 'Monthly active patients',
        path: '/awell-orchestration/docs/data/monthly-active-patients',
      },
    ],
  },
  {
    title: 'Integrations',
    submenu: [
      {
        title: 'Healthcare interoperability',
        path: '/awell-orchestration/docs/integrations/healthcare-interoperability',
      },
      {
        title: 'Webhooks',
        path: '/awell-orchestration/docs/integrations/webhooks',
      },
    ],
  },
]
