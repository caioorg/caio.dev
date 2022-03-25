import React, { useCallback } from 'react';
import { resumeWorking } from '@utils/experiences';
import { Container, Card, CardContainer } from './styles';

const Career: React.FC = () => {
  const parseDate = useCallback((date: string | undefined) => {
    if (date) {
      const d = new Date(date)
      return d.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
    }

    return 'current'
  }, [])

  return (
    <Container id='carrer'>
      <h3>Carrer</h3>
      <CardContainer>
        {resumeWorking.map((item, index) => (
          <Card key={index}>
            <strong>{item.company}</strong>
            <p>{item.role}</p>
            <span>{parseDate(item.startDate)} - {parseDate(item.endDate)}</span>
            <p>{item.activity}</p>
          </Card>
        ))}
      </CardContainer>
    </Container>
  )
}

export default Career;