<template>
  <q-page>
    <q-card>
      <q-card-section>
        <div class="text-center">
          <h3>Markup Table</h3>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="q-pa-md">
          <q-markup-table separator="none" style="width: 650px; margin: 0 auto">
            <thead class="bg-primary text-white">
              <tr>
                <th style="font-size: 1.2rem" class="text-left">
                  Product Name
                </th>
                <th style="font-size: 1.2rem" class="text-right">Quantity</th>
                <th style="font-size: 1.2rem" class="text-right">MSRP</th>
                <th style="font-size: 1.2rem" class="text-right">Extended</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="font-size: 1.2rem" class="text-left">
                  Graphics Card
                </td>
                <th style="font-size: 1.2rem" class="text-right">2</th>
                <th style="font-size: 1.2rem" class="text-right">1499.99</th>
                <th style="font-size: 1.2rem" class="text-right">2999.98</th>
              </tr>
              <tr>
                <td style="font-size: 1.2rem" class="text-left">
                  Baseball Cap
                </td>
                <th style="font-size: 1.2rem" class="text-right">3</th>
                <th style="font-size: 1.2rem" class="text-right">22.99</th>
                <th style="font-size: 1.2rem" class="text-right">45.98</th>
              </tr>
              <tr>
                <td style="font-size: 1.2rem" class="text-left">Laptop</td>
                <th style="font-size: 1.2rem" class="text-right">1</th>
                <th style="font-size: 1.2rem" class="text-right">1649.95</th>
                <th style="font-size: 1.2rem" class="text-right">1649.95</th>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style="font-size: 1.2rem" class="text-center">Subtotal:</td>
                <td style="font-size: 1.2rem" class="text-left">4250.52</td>
              </tr>
              <tr>
                <td style="font-size: 1.2rem" class="text-center">Tax:</td>
                <td style="font-size: 1.2rem" class="text-left">142.52</td>
              </tr>
              <tr>
                <td style="font-size: 1.2rem" class="text-center">Total:</td>
                <td style="font-size: 1.2rem" class="text-left">4392.52</td>
              </tr>
            </tfoot>
          </q-markup-table>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
