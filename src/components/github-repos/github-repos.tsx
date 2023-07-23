import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

async function getGithubRepos() {
  const repos = await fetch('https://api.github.com/users/jamiesmachon/repos');

  if (!repos.ok) {
    throw new Error('Failed to fetch repos');
  }

  return repos.json();
}

const GitHubRepos = async () => {
  const repos = await getGithubRepos();

  return (
    <>
      {repos.map((repo: any) => {
        if (!repo.fork) {
          return (
            <Card key={repo.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="break-words">{repo.name}</CardTitle>
              </CardHeader>
              <CardContent className="grow">
                <p>{repo.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href={repo.html_url} target="_blank">
                    Visit Repo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        }
      })}
    </>
  );
};

export default GitHubRepos;
