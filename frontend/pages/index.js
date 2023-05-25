import React, { useState } from 'react';
import Head from 'next/head'
import ConvertNumberForm from '../src/components/convertNumberForm'

export default function Home() {
  const [convertionResult, setconvertionResult] = useState();

  return (
    <div className="container">
      <Head>
        <title>Coding Kata Roman Numerals</title>
        <meta name="description" content="Coding Kata Roman Numerals" />
      </Head>

      <main className="brcs">
        <div className="row mt-4 mb-4">
          <div className="col">
            <h1 className="brcs__header" data-testid="h1_header">
              Coding Kata <span>Roman Numerals</span>
            </h1>
          </div>
        </div>

        <div className="row mt-4 mb-4">
          <div className="col col-4">
            <ConvertNumberForm {...{setconvertionResult}} />
          </div>
          <div className="col col-8">
            <h2>Result:</h2>
            <h4 data-testid="romanNumberResult">{convertionResult}</h4>
          </div>
        </div>
      </main>
    </div>
  )
}
