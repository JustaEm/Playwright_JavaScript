import { test, expect } from '@playwright/test';

test('Test1@sanity', async ({page}) => {
    console.log('This is my sanity test1')

});

test('Test2@reg', async ({page}) => {
    console.log('This is my reg test2')

});

test('Test3@sanity', async ({page}) => {
    console.log('This is my sanity test3')

});

test('Test4@reg@sanity', async ({page}) => {
    console.log('This is my reg and sanity test4')

});

