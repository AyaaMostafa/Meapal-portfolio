/* eslint-disable max-len */
import React from 'react';
import '../../style/visionStyle.scss';
import { useTranslation } from 'react-i18next';
function GdprWorks() {
  const { t } = useTranslation();

  return (
    <div className="visionpage">
      <div className="proj mb-2">
        <div className="proj-titel-container"><h3 className="proj-title"> {t('gdpr_title')}</h3></div>
      </div>
      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
      {t('data_inventory_title')}
      {t('planning')}      </h3>
      <p className="vision-text mb-3">
      {t('dataInventoryMapping')}
      </p>
      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
      {t('data')}
        <span className="highlight"> {t('protectionOfficer')} </span>
        (DPO)
      </h3>
      <p className="vision-text mb-3">
      {t('dpoService')}
      </p>
      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
      {t('dataProtection')}
        <span className="highlight">   {t('impactAssessments')}
        </span>
        (DPIAs)

      </h3>
      <p className="vision-text mb-3">
      {t('dpiaServicesText')}

      </p>
    </div>
  );
}
export default GdprWorks;
