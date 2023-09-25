import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('http://dev-testing.andalusiagroup.net:5004/');
  await page.waitForURL('http://dev-testing.andalusiagroup.net:5004/');
  await page.locator('[id="userName"]').click();
  await page.locator('[id="userName"]').type("Alaa emp");
  await page.locator('#password').click();
  const passwordfield = await page.locator('#password');
  await passwordfield.fill("4415");
  //  to  have the value before click on login 
  await expect(passwordfield).toHaveValue("4415");
  // login button 
  await page.locator('[class="btn btn-block submit-btn"]').click();
  // menu icon 
  await page.locator('[class="pr-2 start-nav pl-1"]').click();
  // portal 
  await page.locator('[class="d-inline-block mt-2 mb-1 ml-3 mr-3 mb-1"]').click();
  // click on search field and  fill the patient code 
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').fill('00149588ALX');
  // click on search icon 
  await page.locator('[class="fa fa-search search-icon"]').click();
  //  select patient
  await page.getByText('33 Y').click();
  // capture patient
  await expect(page.locator('button:has-text("Capture Patient")')).toBeVisible();
  await page.getByRole('button', { name: 'Capture Patient' }).click();
//   fourth case  add procedure and delete it  from order list 
  await page.getByText('Orders', { exact: true }).click();
  await page.getByText('Order Entry').click();
  await page.locator('.col > .k-widget > .k-dropdown-wrap > .k-select > .k-icon').first().click();
  await page.getByRole('option', { name: 'Procedure' }).locator('span').click();
  await page.getByPlaceholder('Add new Procedures using the procedure code or name').click();
  await page.getByPlaceholder('Add new Procedures using the procedure code or name').fill('doaa');
  await page.getByRole('gridcell', { name: 'Doaa procedure1' }).locator('div').hover();

  await page.getByRole('gridcell', { name: 'Doaa procedure1' }).locator('div').click();
  await page.locator('#NewOrderList').getByRole('img').nth(2).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  const remove=page.getByText('Removed Successfully!');
  console.debug(remove);
  expect (remove).toHaveText('Removed Successfully!');
  await page.pause();
});

