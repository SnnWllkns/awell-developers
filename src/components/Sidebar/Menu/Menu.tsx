import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

import {
  orchestrationApiMenu,
  orchestrationDocsMenu,
} from '../../../config/menus/awell-orchestration'
import { scoreDocsMenu } from '../../../config/menus/awell-score'
import {
  awellOrchestrationApiHomePage,
  awellOrchestrationDocsHomePage,
} from '../../../config/routes'
import { AppContext } from '../../../contexts/app/AppContext'
import { isMenuItemActive } from '../../../utils/isMenuItemActive'
import { Badge } from '../../Badge'
import {
  CommunityIcon,
  DocumentationIcon,
  PlaygroundIcon,
  PlayIcon,
  StudioIcon,
} from '../atoms/icons'
import { MainMenuItem } from './atoms/MainMenuItem'

export const Menu = () => {
  const router = useRouter()
  const { menu, setMenu } = useContext(AppContext)

  useEffect(() => {
    if (router.asPath.includes('awell-orchestration')) {
      if (router.asPath.includes('api-reference')) {
        setMenu(orchestrationApiMenu)
      } else {
        setMenu(orchestrationDocsMenu)
      }
    } else {
      if (router.asPath.includes('awell-score')) {
        setMenu(scoreDocsMenu)
      } else {
        setMenu([])
      }
    }
  })

  const subLevelActiveClass =
    'text-sky-500 border-current font-semibold dark:text-sky-400'
  const subLevelInactiveClass =
    'border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'

  return (
    <ul>
      {router.asPath.includes('awell-orchestration') && (
        <li>
          <MainMenuItem
            route={awellOrchestrationDocsHomePage}
            active={
              router.pathname.includes('/docs') || router.pathname === '/'
            }
            label="Documentation"
            icon={DocumentationIcon}
          />
        </li>
      )}
      {router.asPath.includes('awell-orchestration') && (
        <li>
          <MainMenuItem
            route={awellOrchestrationApiHomePage}
            active={
              router.pathname.includes('/api-reference') &&
              !router.query.slug?.includes('playground')
            }
            label="API Reference"
            icon={PlaygroundIcon}
          />
        </li>
      )}
      <li>
        <MainMenuItem
          route={
            router.asPath.includes('awell-orchestration')
              ? '/awell-orchestration/api-reference/overview/playground'
              : '/awell-score/docs/getting-started/playground'
          }
          active={isMenuItemActive(
            'playground',
            router.pathname,
            router.query.slug ? router.query.slug : router.pathname
          )}
          label="Playground"
          icon={PlayIcon}
        />
      </li>
      <li>
        <MainMenuItem
          route={
            router.asPath.includes('awell-orchestration')
              ? '/awell-orchestration/support'
              : '/awell-score/support'
          }
          active={router.pathname.includes('support')}
          label="Support"
          icon={CommunityIcon}
        />
      </li>
      {router.asPath.includes('awell-orchestration') && (
        <li>
          <MainMenuItem
            route="/awell-orchestration/awell-studio-docs"
            active={router.pathname.includes(
              'awell-orchestration/awell-studio-docs'
            )}
            label="Awell Studio Docs"
            icon={StudioIcon}
          />
        </li>
      )}
      {menu.map((menuItem, index) => (
        <li className="mt-12 lg:mt-8" key={index}>
          <h5 className="mb-8 lg:mb-3 font-semibold text-base text-slate-900 dark:text-slate-200">
            {menuItem.title}
          </h5>
          {menuItem.submenu && (
            <ul className="space-y-2 lg:space-y-4 mt-2 lg:mt-4 border-l border-slate-200 dark:border-slate-700 lg:dark:border-slate-800">
              {menuItem.submenu.map((subMenuItem, index) => (
                <li key={index}>
                  <Link href={subMenuItem.path}>
                    <a
                      title={subMenuItem.title}
                      target={subMenuItem.openInNewTab ? '_blank' : ''}
                      className={clsx(
                        'text-lg lg:text-base lg:leading-6 flex justify-between block border-l pl-4 -ml-px',
                        isMenuItemActive(
                          subMenuItem.path,
                          router.pathname,
                          router.query.slug
                            ? router.query.slug
                            : router.pathname
                        )
                          ? subLevelActiveClass
                          : subLevelInactiveClass
                      )}
                    >
                      <span>{subMenuItem.title}</span>
                      <div className="flex items-center">
                        {subMenuItem.badge && (
                          <Badge size="sm" color={subMenuItem.badge.color}>
                            {subMenuItem.badge.label}
                          </Badge>
                        )}
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}
