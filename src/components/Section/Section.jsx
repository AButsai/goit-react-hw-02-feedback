import React, { Component } from 'react';
import { Notification } from '../Notification';
import { Statistics } from '../Statistics';
import { FeedbackOptions } from '../FeedbackOptions';
import s from './Section.module.css';

class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCountGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleCountNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleCountBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage =
      (100 / this.countTotalFeedback()) * this.state.good;
    return positiveFeedbackPercentage.toFixed();
  };

  render() {
    const totalCountFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={s.sectionBlock}>
        <h1 className={s.title}>{'Please leave feedback'}</h1>
        <div className={s.buttons}>
          <FeedbackOptions
            options={{ title: 'Good' }}
            onLeaveFeedback={this.handleCountGood}
          />
          <FeedbackOptions
            options={{ title: 'Neutral' }}
            onLeaveFeedback={this.handleCountNeutral}
          />
          <FeedbackOptions
            options={{ title: 'Bad' }}
            onLeaveFeedback={this.handleCountBad}
          />
        </div>

        <h2 className={s.statisticsTitle}>Statistics</h2>
        {totalCountFeedback === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalCountFeedback}
            positivePercentage={positiveFeedbackPercentage}
          ></Statistics>
        )}
      </div>
    );
  }
}

export { Section };
