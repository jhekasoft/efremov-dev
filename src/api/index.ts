import { DeveloperTimelineData, CvData } from './types';

export async function fetchDeveloperTimeline(reverse = false): Promise<DeveloperTimelineData> {
  const res = await fetch(
    'http://localhost:3001/developer-timeline' + (reverse ? "?reverse=1" : "")
  )
  return await res.json()
}

export async function fetchCv(): Promise<CvData> {
  const res = await fetch('http://localhost:3001/cv')
  return await res.json()
}
