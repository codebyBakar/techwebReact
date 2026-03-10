import React, { useState } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { PiTagFill } from "react-icons/pi";
import { PiFire } from "react-icons/pi";
import './pricing.css';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 800,
      yearlyPrice: 560,
      desc: "Ideal for businesses ready to explore AI and intelligent automation",
      features: ["Basic AI Tools", "Limited Automation Features", "Real-Time Reporting", "Basic Chatbot Integration"],
      popular: false
    },
    {
      name: "Pro",
      monthlyPrice: 1700,
      yearlyPrice: 1190,
      desc: "Built for companies that want to gain an edge with AI-powered automation",
      features: ["Advanced AI Tools", "Customizable Workflows", "AI-Powered Analytics", "Premium Chatbot Features", "Cross-Platform Integrations"],
      popular: true
    },
    {
      name: "Enterprise",
      monthlyPrice: 4700,
      yearlyPrice: 3290,
      desc: "For businesses aiming to harness AI and automation to lead their industry",
      features: ["Fully Customized AI Solutions", "Unlimited Integrations", "Advanced Reporting & Insights", "Scalable AI Solutions", "Team Collaboration Features" , "Priority Feature Access"],
      popular: false
    }
  ];

  return (
    <div id="pricing" className="pricing-wrapper">
      <div className="pricing-container">
        <div className="pricing-header">
          <div data-aos="fade-up"  className="anima-text-box">
                    <div className="benefit">
                           <p><PiTagFill/></p> 
                        <p>PRICING</p>
                        </div>
                
                    <h2  className="why-title">Simple Price For All</h2>
                      <p className="why-subtitle">
                 Flexible pricing plans that fit your budget & scale with needs.
                       </p>
                </div>
          {/* TOGGLE SECTION - EXACTLY LIKE SCREENSHOT */}
          <div data-aos="fade-up" className="toggle-wrapper">
            <div className="billing-tabs-container">
              <button 
                type="button"
                className={`tab-btn ${billingCycle === 'monthly' ? 'active' : ''}`} 
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button 
                type="button"
                className={`tab-btn ${billingCycle === 'yearly' ? 'active' : ''}`} 
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly
              </button>
            </div>
            <span className="discount-pill">30% off</span>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div data-aos="fade-up" key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              <div className="card-top">
                <div className="plan-name-row">
                  <span className="plan-name">{plan.name}</span>
                  {plan.popular &&  <span className="popular-tag"> <PiFire/> Popular</span>}
                </div>
                <div className="plan-price">
                  <span className="amount"> $ {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}</span>
                  <span className="duration">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                </div>
                <p className="plan-desc">{plan.desc}</p>
                <button className={`cta-btn ${plan.popular ? 'dark' : 'light'}`}>
                  Get Started <ArrowUpRight size={18} />
                </button>
              </div>
              <div className="divider"></div>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li className='list-price' key={i}><Check size={16} className="check-icon" /> {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;