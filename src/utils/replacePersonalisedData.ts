import cheerio from 'cheerio';
import { cartCounter } from './html/cartCounter';

import { cartModal } from './html/cartModal';

const replacePersonalizedData = ($: cheerio.Root) => {
  $('.header-main-minicart').html(cartCounter);
  $('.popover-minicart').html(cartModal);
};

export default replacePersonalizedData;
