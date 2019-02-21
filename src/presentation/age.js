import React from "react";

import { Text } from "spectacle";

const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;

// verifica se é ano bisexto
function isLeapYear(year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

function calcMyAge(borndate) {
  const currentDate = new Date();
  const dateDiff = currentDate.getTime() - borndate.getTime();

  let ycc = 0;
  let yearsSum = 0;
  for (let y = borndate.getFullYear(); y <= currentDate.getFullYear(); y++) {
    const daysInThatYear = (isLeapYear(y) ? 366 : 365) * ONE_DAY;
    if (ycc + daysInThatYear <= dateDiff) {
      ycc = ycc + daysInThatYear;
      yearsSum++;
    }
  }

  const yearsDiff = dateDiff - ycc;

  const days = Math.floor(yearsDiff / ONE_DAY);
  const daysDiff = yearsDiff - days * ONE_DAY;

  const hours = Math.floor(daysDiff / ONE_HOUR);
  const hoursDiff = daysDiff - hours * ONE_HOUR;

  const minutes = Math.floor(hoursDiff / ONE_MINUTE);
  const minutesDiff = hoursDiff - minutes * ONE_MINUTE;

  const seconds = Math.floor(minutesDiff / ONE_SECOND);

  return {
    years: Math.max(yearsSum, 0),
    days: Math.max(days, 0),
    hours: Math.max(hours, 0),
    minutes: Math.max(minutes, 0),
    seconds: Math.max(seconds, 0),
  };
}

function p(v = 0, s) {
  return `${+v < 10 ? "0" : ""}${v} ${s}${+v === 0 || +v > 1 ? "s" : ""}`;
}

export default class Age extends React.PureComponent {
  constructor(props) {
    super(props);

    this.borndate = new Date(1987, 2, 1);

    this.state = {
      tempoDeVida: calcMyAge(this.borndate),
    };
  }
  componentDidMount() {
    this.tempoInterval = setInterval(
      () =>
        this.setState({
          tempoDeVida: calcMyAge(this.borndate),
        }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.tempoInterval);
  }
  render() {
    const { tempoDeVida } = this.state;

    return (
      <Text bold fit textColor="default">
        {`Tenho ${p(tempoDeVida.years, "ano")}, ${p(tempoDeVida.days, "dia")}, ${p(tempoDeVida.hours, "hora")}, ${p(
          tempoDeVida.minutes,
          "minuto"
        )} e ${p(tempoDeVida.seconds, "segundo")} de idade`}
      </Text>
    );
  }
}
