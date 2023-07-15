import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import s from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string
}

const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div className={classNames(s.ErrorPage, {}, [className])}>
            <h1>{t('Произошла непредвиденная ошибка')}</h1>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};

export { ErrorPage };
