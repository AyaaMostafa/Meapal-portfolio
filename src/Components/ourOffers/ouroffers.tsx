/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import '../../style/ouroffers.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function OurOffers() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="offerspage text-center">
      <h2 className="offerspage-h2 text-center">
        <span className="highlight"> {t('industries')}</span>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="predictive-maintenance-1.png" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title"> {t('predictiveMaintenanceQualityControl')}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="optimzation.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">{t('processOptimizationAutomation')}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="monitoring.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">{t('realTimeTrackingMonitoring')}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="anomaly.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">{t('anomalyDetection')}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="security.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">{t('safetyAndSecurity')}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="cars.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title"> {t('carTrucksRelatedProducts')}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="marketing.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">{t('marketing')}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="hr.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">{t('humanResources')}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="bank.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">{t('financialBankingServices')}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="education.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">{t('educational')}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="service.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">  {t('healthcare')}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="agriculture.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title"> {t('agricultural')}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="healthcare.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">  {t('healthcare')}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="nlp.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">NLP & LLM</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="iot.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title"> {t('smartIoT')}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurOffers;
