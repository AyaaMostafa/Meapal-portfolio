/* eslint-disable max-len */
import React from 'react';
import '../../style/visionStyle.scss';
import { useTranslation } from 'react-i18next';
function DataScienceWorks() {
  const { t } = useTranslation();
  return (
    
    <div className="visionpage">
      <div className="proj mb-2">
        <div className="proj-titel-container"><h3 className="proj-title">{t('dataScienceServices')}</h3></div>
      </div>
      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
      {t('camelCustomized')}
        <span className="highlight"> {t('largeLanguageModel')} </span>
        (LLM)
      </h3>
      <p className="vision-text mb-3">
      {t('personalizedAiAssistant')}
      </p>
      <p className="vision-text mb-3">
      {t('camelDescription')}
      </p>
      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
      {t('intelligentVideoSurveillance')}
        <span className="highlight">{t('videoSurveillance')} </span>
        (IVS)
      </h3>
      <p className="vision-text mb-3">
      {t('aiPoweredVideoSurveillance')}
      </p>
      <p className="vision-text mb-3">
      {t('ivsDescription')}
      </p>
      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
  {t('aiPoweredRecruitmentPlatform')}
</h3>
<p className="vision-text mb-3">
  {t('intelligentHiringPlatform')}
</p>
<p className="vision-text mb-3">
  {t('candiJobDescription')}
</p>
      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('portTerminalTitle')}
        <span className="highlight"> {t('smartSolutionsTitle')}</span>
      </h3>
      <p className="vision-text mb-3">
      {t('smartPortOperations')}
      </p>
      <p className="vision-text mb-3">
      {t('portManagementIntro')}
        <ul>
        <li>{t('vesselBerthAllocation')}</li>
    <li>{t('vesselOperationTimeAnalysis')}</li>
    <li>{t('containerSuspicionPrediction')}</li>
        </ul>
      </p>
      <h2 className="visionpage-h2">
      {t('otherFields')}
        <span className="highlight"> {t('specialize')} </span>
        {t('in')}
      </h2>
      <h3 className="visionpage-h2">
      {t('marketing')}
      </h3>
      <img className="vision-img" src="datascience-1.png" alt="datascience-1" />
      <h3 className="visionpage-h2">
      {t('human')}
        <span className="highlight"> {t('resources')} </span>
      </h3>
      <img className="vision-img" src="datascience-2.png" alt="datascience-2" />
      <h3 className="visionpage-h2">
      {t('banking')}
        <span className="highlight"> {t('services')} </span>
      </h3>
      <img className="vision-img" src="datascience-3.png" alt="datascience-1" />
      <h3 className="visionpage-h2">
      {t('educational')}

      </h3>
      <img className="vision-img" src="datascience-4.png" alt="datascience-1" />
      <h3 className="visionpage-h2">
      {t('agricultural')}
      </h3>
      <img className="vision-img" src="datascience-5.png" alt="datascience-1" />

      <h3 className="visionpage-h2">
      {t('services')}
        <span className="highlight"> {t('management')} </span>
      </h3>
      <img className="vision-img-small" src="datascience-5.png" alt="datascience-1" />
      <h2 className="visionpage-h2 mb-0">
      {t('internetOf')}
        <span className="highlight">  {t('things')} </span>
        (IOT)
      </h2>
      <p className="vision-text mb-3">
      {t('iot_paragraph')}

      </p>
    </div>
  );
}
export default DataScienceWorks;
