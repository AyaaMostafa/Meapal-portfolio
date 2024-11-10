/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../../style/jobsStyle.scss';
import { useTranslation } from 'react-i18next';
function JobsPage() {
  const { t } = useTranslation();
  const openLinkInNewWindow = (url: string | URL | undefined) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="jobspage">
      <h2 className="jobspage-h2">
      {t('newsAnd')}
        <span className="highlight">   {t('events')}
        </span>
      </h2>

      <h2 className="jobspage-h2">
      {t('technicalDebtTitle')}
      </h2>
      <p style={{ fontWeight: 'bold' }} className="jobs-text ms-2">
      {t('eventDate')}
      </p>
      <p className="jobs-text">
      {t('technicalDebtDescription')}
      </p>

      <button onClick={() => openLinkInNewWindow('http://10.10.99.13:4892/')} className="application-button" type="button">
      {t('goToWebsite')}
      </button>
    </div>
  );
}
export default JobsPage;
