import { t } from '/@/hooks/web/useI18n';
import type { MenuModule } from '/@/router/types';

const about: MenuModule = {
  orderNo: 99999,
  menu: {
    path: '/details/index',
    name: t('routes.dashboard.details'),
  },
};
export default about;
