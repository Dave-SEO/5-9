import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import type { AppRouteModule } from '/@/router/types';


const dashboard: AppRouteModule = {
  path: '/details',
  name: 'details',
  component: LAYOUT,
  redirect: '/details/index',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.details'),
  },
  children: [
    {
      path: 'index',
      name: 'details',
      component: () => import('/@/views/details/index.vue'),
      meta: {
        title: t('routes.dashboard.details'),
        icon: 'simple-icons:about-dot-me',
      },
    },
  ],
};

export default dashboard;
