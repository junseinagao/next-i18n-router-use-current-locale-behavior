'use client';

import { usePathname } from 'next/navigation';
import i18nConfig from '@/i18nConfig';
import { useCurrentLocale } from 'next-i18n-router/client';
import Link from 'next/link';

export default function LanguageChangerLinks() {
  const currentLocale = useCurrentLocale(i18nConfig);
  const currentPathname = usePathname();
  const pathname = usePathname();

  return (
    <>
      <Link href={currentPathname.replace(`/${currentLocale}`, `/en`)}>
        English
      </Link>
      <Link href={currentPathname.replace(`/${currentLocale}`, `/de`)}>
        Deutsch
      </Link>
      <Link href={currentPathname.replace(`/${currentLocale}`, `/ja`)}>
        日本語
      </Link>
      <div>
        <pre>useCurrentLocale: {currentLocale}</pre>
        <pre>usePathname: {pathname}</pre>
      </div>
    </>
  );
}
